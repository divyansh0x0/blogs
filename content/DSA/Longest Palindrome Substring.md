---
title: Finding Longest Palindrome Substring
description: Discusses various algorithms to find longest palindrome substring
date: 24 January 2026
source: "https://leetcode.com/problems/longest-palindromic-substring/"
---

## The simplest way : Check all substrings

This will give a $O(n^3)$ time complexity. I checked all substrings using a sliding window.

```python
class Solution:
    # Checks if string is a palindrome
    def check(self,s:str) -> bool:
        for i in range(0, len(s)):
            if s[i] != s[len(s) - i - 1]:
                return False
        return True
    def longestPalindrome(self, s: str) -> str:
        window_size = len(s)
        n = len(s)
        center = n//2
        while window_size >= 0:
            for i in range(len(s) - window_size+ 1):
                substr = s[i:window_size+i]
                if self.check(substr):
                    return substr
            window_size -= 1
```


