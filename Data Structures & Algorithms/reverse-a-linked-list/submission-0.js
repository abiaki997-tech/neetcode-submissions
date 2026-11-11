/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {

        let prev=null;
        let current=head;

        while (current){
           //capture link
           let temp = current.next;
           //point reverse
           current.next=prev;
           //move pointer prev
           prev=current
           //move pointer current
           current=temp
        }

        // return head
        return prev;
    }
}
