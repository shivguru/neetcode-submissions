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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        if(!list1) {
            return list2
        }
        if(!list2) {
            return list1;
        }
        let head = null;
        if(list2.val > list1.val ) {
            head = list1;
            list1 = list1.next;
        } else {
            head = list2;
            list2 = list2.next;
        }
        let pointer = head;
        while (list1 !== null || list2 !== null) {
           if(list1 === null) {
            pointer.next = list2;
            list2 = list2.next;
           } else if(list2 === null) {
            pointer.next = list1;
            list1 = list1.next;
           } else if( list2.val > list1.val ) {
                pointer.next = list1;
                list1 = list1.next;
            } else {
                pointer.next = list2;
                list2 = list2.next;
            }
            pointer = pointer.next;
        }
        return head;
    }
}
