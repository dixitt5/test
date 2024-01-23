"use client";
import React, { useEffect } from "react";
// import { ForceGraph2D } from "react-force-graph";
import { nodeData, linksData } from "../data";
import { MultiDirectedGraph } from "graphology";
import { SigmaContainer, useLoadGraph } from "@react-sigma/core";
import "@react-sigma/core/lib/react-sigma.min.css";
import Color from "./components/Color";

const colors = [
  { name: "Mumbai", color: "#C4B3B3" },
  { name: "Ahmedabad", color: "#118F59" },
  { name: "Amritsar", color: "#C17ABE" },
  { name: "Bangalore", color: "#D5C8FD" },
  { name: "Bhopal", color: "#7A09E5" },
  { name: "Chandigarh", color: "#431E70" },
  { name: "Chennai", color: "#467683" },
  { name: "Delhi", color: "#4FCA68" },
];
export const LoadGraph = () => {
  const loadGraph = useLoadGraph();
  const hashMap = new Map();
  useEffect(() => {
    const graph = new MultiDirectedGraph();
    console.log(linksData[0].label);
    // graph.nodes().forEach((node, index) => {
    //   // console.log(nodeData[index].id);
    //   hashMap.set(nodeData[index].id, node);
    //   graph.mergeNodeAttributes(node, {
    //     label: nodeData[index].label,
    //     size: 15,
    //     color: nodeData[index].color,
    //     x: Number(nodeData[index].x),
    //     y: Number(nodeData[index].y),
    //   });
    // });
    nodeData.forEach((node, index) => {
      hashMap.set(node.id, index);
      graph.addNode(index, {
        x: Number(node.x),
        y: Number(node.y),
        label: node.label,
        size: 20,
        color: node.color,
      });
    });
    // graph.addNode("first", {
    //   x: 0,
    //   y: 0,
    //   size: 15,
    //   label: "My first node",
    //   color: "#FA4F40",
    // });
    // graph.addNode("second", {
    //   x: 0.1,
    //   y: 0,
    //   size: 25,
    //   label: "My first node",
    //   color: "#FA4F40",
    // });
    console.log(
      hashMap.get("NW92ulvjPmX4MeTuhPU4Ms4183v1"),
      hashMap.get("co0KRYMbLnZ5OJSrMDljo8bHCWq2")
    );

    linksData.forEach((link, index) => {
      graph.addEdgeWithKey(
        index,
        hashMap.get(link.source),
        hashMap.get(link.target),
        { label: index }
      );
    });
    // graph.addEdgeWithKey(
    //   "rel1",
    //   hashMap.get("NW92ulvjPmX4MeTuhPU4Ms4183v1"),
    //   hashMap.get("co0KRYMbLnZ5OJSrMDljo8bHCWq2"),
    //   { label: "REL_1" }
    // );
    // graph.edges().forEach((edge, index) => {
    //   graph.mergeEdgeAttributes(edge, {
    //     label: "label",
    //     source: "Ishan Agarwal",
    //     target: "SneakerOffice ",
    //   });
    // });
    loadGraph(graph);
  }, [loadGraph]);

  return null;
};

export default function Network() {
  return (
    <div>
      <SigmaContainer
        graph={MultiDirectedGraph}
        style={{ height: "980px", width: "auto" }}
      >
        <LoadGraph />
        <div className="flex flex-row gap-3 p-2 bg-white justify-center">
          {colors.map((color, index) => {
            return <Color key={index} color={color.color} name={color.name} />;
          })}
        </div>
      </SigmaContainer>
    </div>
  );
}
