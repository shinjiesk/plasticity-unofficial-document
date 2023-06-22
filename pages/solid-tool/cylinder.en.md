# Cylinder

- Allows you to create a cylinder from a circle specified by its center and diameter.
- Shortcut: `Shift`+`C`
- Button: Toolbar

1. Click the icon on the toolbar.
   - **Select target bodies**: Select the targets for the Boolean operation (solid, sheet).
   - **Radius**: Specifies the radius.
   - **Height**: Specifies the height.
2. Click at the center of the circle.
3. Move the cursor and click at the position for the radius.
4. Move the cursor and click at the desired height.
   - `Shift`+`Q`: **Slice**: Creates a solid at the intersection with the Boolean target and keeps the remaining solid as well.
   - `Q`: **Union**: Unites with the Boolean target.
   - `W`: **Difference**: Subtracts from the Boolean target.
   - `Shift`+`E`: **Intersect**: Creates a solid at the intersection with the Boolean target.
   - `B`: **New Body**: Creates a new solid. The Boolean operation is canceled.
   - `T`: **Keep Tool**: The Boolean operation is executed, and a new solid is also created.
   - `F`: **Radius**: Move the cursor to specify the radius.
   - `D`: **Height**: Move the cursor to specify the height.
5. You can drag the yellow dot to change the radius and height.
6. Click **OK** in the command dialog or right-click to confirm.
7. A cylinder is created.
