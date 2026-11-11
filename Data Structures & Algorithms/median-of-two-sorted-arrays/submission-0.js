class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
            let merge_sort=[...nums1,...nums2];
    merge_sort.sort((a,b)=>a-b);
    console.log(merge_sort.length%2==0)
    
    if(merge_sort.length%2==0){
        let mid=Math.floor(merge_sort.length/2)
        return (merge_sort[mid]+merge_sort[mid-1])/2
    }else{
        let mid=Math.floor(merge_sort.length/2)
        return merge_sort[mid]
    }
    }
}
