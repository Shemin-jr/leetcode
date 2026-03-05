/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    let res = [];
    function rec(root) {
        if (!root) return;
        if (root.left) rec(root.left);
        res.push(root.val);
        if (root.right) rec(root.right);
    }
    rec(root);
    return res;
};