---
title: Processes and threads
description: Explains the difference between processes and threads, how they work, and how operating systems manage execution, memory, and concurrency.
dated: 24 January 2025
source:
---

## Definitions

**Process**: An instance of a running program, including its program counter, registers, and variables.
**Process model**: A conceptual framework where each running program is treated as an independent sequential process.
**Thread**: A lightweight unit of execution within a process that can run concurrently with other threads.
**Multiprogramming**: A technique where multiple processes are kept in memory and the CPU switches among them to improve 
utilization.
**Pseudoparallelism**: The illusion of parallel execution on a single CPU created by rapid context switching.
**True parallelism**: Actual simultaneous execution of processes on multiple CPUs sharing memory.