import React, { useMemo } from "react";
import { ReactFlow, Background, MarkerType } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

const AutomationFlow: React.FC = () => {
  const nodes = useMemo(
    () => [
      { id: "n1", position: { x: 20, y: 40 }, data: { label: "Trigger" }, type: "input", draggable: false, selectable: false },
      { id: "n2", position: { x: 220, y: 40 }, data: { label: "Enriquecer" }, type: "default", draggable: false, selectable: false },
      { id: "n3", position: { x: 420, y: 40 }, data: { label: "CRM" }, type: "output", draggable: false, selectable: false },
      { id: "n4", position: { x: 220, y: 140 }, data: { label: "Notificar" }, type: "default", draggable: false, selectable: false },
    ],
    []
  );

  const edges = useMemo(
    () => [
      { id: "e1-2", source: "n1", target: "n2", animated: true, markerEnd: { type: MarkerType.ArrowClosed }, style: { stroke: "hsl(var(--primary))" } },
      { id: "e2-3", source: "n2", target: "n3", animated: true, markerEnd: { type: MarkerType.ArrowClosed }, style: { stroke: "hsl(var(--primary))" } },
      { id: "e2-4", source: "n2", target: "n4", animated: true, markerEnd: { type: MarkerType.ArrowClosed }, style: { stroke: "hsl(var(--primary))" } },
    ],
    []
  );

  return (
    <div aria-hidden className="w-full h-full pointer-events-none">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        minZoom={1}
        maxZoom={1}
        panOnDrag={false}
        panOnScroll={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        nodesDraggable={false}
        elementsSelectable={false}
        proOptions={{ hideAttribution: true }}
        style={{ background: "transparent" }}
      >
        <Background gap={12} color="hsl(var(--muted-foreground) / 0.15)" />
      </ReactFlow>
    </div>
  );
};

export default AutomationFlow;
