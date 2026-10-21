import { Scene, PerspectiveCamera, WebGLRenderer, Group, Mesh, TorusGeometry, MeshPhysicalMaterial, AmbientLight, DirectionalLight, Color, MathUtils } from "three";

/** A demand-driven, procedural object. No assets, physics, post-processing or perpetual loop. */
export function mountCore(host: HTMLElement, initialProgress: number) {
  const css = getComputedStyle(host);
  const token = (name: string) => new Color(`hsl(${css.getPropertyValue(name).trim().split(/\s+/).join(", ")})`);
  const renderer = new WebGLRenderer({ alpha: true, antialias: true, powerPreference: "low-power" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  renderer.setClearColor(0, 0);
  host.appendChild(renderer.domElement);
  const scene = new Scene();
  const camera = new PerspectiveCamera(35, 1, .1, 30);
  camera.position.set(0, 0, 8.8);
  const core = new Group();
  scene.add(core);
  const geometry = new TorusGeometry(1.35, .19, 16, 96);
  const materials = ["--primary", "--primary-glow", "--primary"].map(name => new MeshPhysicalMaterial({ color: token(name), metalness: .28, roughness: .23, clearcoat: 1, clearcoatRoughness: .2 }));
  const rings = materials.map(material => { const mesh = new Mesh(geometry, material); core.add(mesh); return mesh; });
  scene.add(new AmbientLight(token("--foreground"), 1.6));
  [[-3, 5, 6, 4], [4, -2, 3, 2], [0, 3, -4, 3]].forEach(([x,y,z,power]) => { const light = new DirectionalLight(token("--warm"), power); light.position.set(x,y,z); scene.add(light); });
  let target = initialProgress, current = initialProgress, px = 0, py = 0, tx = 0, ty = 0;
  let frame = 0, last = 0, visible = true, disposed = false;
  const draw = (time: number) => {
    frame = 0;
    if (disposed || !visible || document.hidden) return;
    const dt = Math.min((time - last) / 1000 || .016, .05); last = time;
    const damping = 1 - Math.exp(-8 * dt);
    current = MathUtils.lerp(current, target, damping); px = MathUtils.lerp(px, tx, damping); py = MathUtils.lerp(py, ty, damping);
    core.rotation.set(.2 + py, -.38 + current * 1.4 + px, -.25 + current * .5);
    rings.forEach((ring, i) => {
      const open = Math.sin(current * Math.PI);
      ring.rotation.set(i * .86 + open * .35, i * .78 + current * .65, i * .3);
      ring.position.set((i - 1) * open * .48, (i - 1) * open * .26, (i - 1) * .16);
    });
    renderer.render(scene, camera);
    if (Math.abs(current-target) + Math.abs(px-tx) + Math.abs(py-ty) > .001) frame = requestAnimationFrame(draw);
  };
  const wake = () => { if (!frame && visible && !document.hidden && !disposed) { last = performance.now(); frame = requestAnimationFrame(draw); } };
  const resize = new ResizeObserver(() => { const { width, height } = host.getBoundingClientRect(); if (!width || !height) return; camera.aspect = width / height; camera.updateProjectionMatrix(); renderer.setSize(width,height); wake(); });
  resize.observe(host);
  const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; if (!visible) { cancelAnimationFrame(frame); frame = 0; } else wake(); });
  observer.observe(host);
  const visibility = () => { if (document.hidden) { cancelAnimationFrame(frame); frame = 0; } else wake(); };
  document.addEventListener("visibilitychange", visibility);
  let dragging = false, origin = 0, drag = 0;
  const move = (e: PointerEvent) => { if (e.pointerType !== "mouse") return; const box = host.getBoundingClientRect(); tx = dragging ? drag + (e.clientX-origin) * .005 : (e.clientX-box.left-box.width/2) / box.width * .35; ty = (e.clientY-box.top-box.height/2) / box.height * .18; wake(); };
  const down = (e: PointerEvent) => { if (e.pointerType !== "mouse") return; dragging = true; origin = e.clientX; drag = tx; host.setPointerCapture(e.pointerId); };
  const up = () => { dragging = false; };
  const leave = () => { if (!dragging) { tx = 0; ty = 0; wake(); } };
  host.addEventListener("pointermove",move); host.addEventListener("pointerdown",down); host.addEventListener("pointerup",up); host.addEventListener("pointercancel",up); host.addEventListener("pointerleave",leave);
  const lost = (e: Event) => { e.preventDefault(); renderer.domElement.style.visibility = "hidden"; host.dataset.failed = "true"; cancelAnimationFrame(frame); frame = 0; visible = false; };
  renderer.domElement.addEventListener("webglcontextlost",lost);
  wake();
  return { update(progress: number) { target = progress; wake(); }, dispose() { disposed = true; cancelAnimationFrame(frame); resize.disconnect(); observer.disconnect(); document.removeEventListener("visibilitychange",visibility); host.removeEventListener("pointermove",move);host.removeEventListener("pointerdown",down);host.removeEventListener("pointerup",up);host.removeEventListener("pointercancel",up);host.removeEventListener("pointerleave",leave);renderer.domElement.removeEventListener("webglcontextlost",lost);geometry.dispose();materials.forEach(m=>m.dispose());renderer.dispose();renderer.domElement.remove(); } };
}