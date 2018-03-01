### Specs
1. Two play fields of 10x10 will display.
2. Clicking on a cell will fire a 'shot', marking/revealing the location.
3. Clicking a marked cell will have no effect.
4. User may place nodes on the field.
  * A node is a 3x3 grid with a 'weak point' in the center.
5. Nodes cannot overlap.
6. Fields display a point total for how many nodes there have been placed.
7. Nodes connected by a full edge are worth more points.
8. Nodes connected in a straight line are worth even more points.
8. Shooting a node edge deducts one point from the field's total.
9. Shooting a node's center destroys the entire node, deducting the appropriate number of points.
7. The game will be split into sections
  1. Setup
    * Players take turns laying down their nodes.
    * Max score possible is listed for the node configuration.
  2. Play
    * Players alternate attempting to destroy each other's nodes.
    * Total points decrease as nodes are hit.
    * Lasts until all of one player's nodes are destroyed.
  3. Endgame/Review
    * All node locations are revealed.
    * Points are tallied.
    * Players allowed to start again(points back to 0) or continue from the current score.


Points are determined by how many nodes/undamaged nodes remain after victory. Connected nodes(into 'ships') are worth more. Regular*nodes_connected
