# Extrude

- Extrudes a solid
- If the target of the extrusion is a face of a solid or a region of a sketch, a solid will be created. If it is a curve, a sheet will be created.

1. Press the shortcut `E`.
2. Select a face of a solid, a region of a sketch, or a curve to be the target of extrusion.
3. Move the yellow dot to specify the distance.
   - **Select target bodies**: Select the targets (solids, sheets) for Boolean operations.
     - `Shift`+`Q`: **Slice** Creates a solid at the intersection with the Boolean target and leaves the remaining solid.
     - `Q`: **Union** Joins with the Boolean target.
     - `W`: **Difference** Cuts from the Boolean target.
     - `Shift`+`E`: **Intersect** Creates a solid at the intersection with the Boolean target.
   - `B`: **New Body** Creates a new solid. The Boolean operation is cancelled.
   - `T`: **Keep Tool** The Boolean operation is performed, and a new solid is also created.
   - `F`: **Freestyle** Specifies the direction of extrusion with two points.
   - `V`: **Pivot** Specifies the direction of extrusion by clicking on a plane.
   - `D`: **Distance 1** Specifies the distance.
   - `A`: **Angle 1** Specifies the angle of extrusion.
   - `Shift`+`T`: **Thickness** Specifies the wall thickness.
   - `Tab`: **Lock distances** Creates the same extrusion on both sides.
4. The extruded solid or sheet is displayed in the work area.
