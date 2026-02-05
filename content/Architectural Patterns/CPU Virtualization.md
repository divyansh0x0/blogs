---
title: CPU Virtualization
description: Explains various methods of CPU virtualization
source: "Operating Systems: Three Easy Pieces"
---

Following are various methods of virtualization CPU. We will go from most simple to most complicated

## Shortest Job First

This works only if we know how long each job is, which is not the case ever but let's keep it here anyway. Ensuring shortest 
job first result in a low average turnaround time (time difference between start and end of a job). 

In pure SJF, we do not relocate jobs i.e. if a new job comes which is shorter than the current running job, the job must wait
which reduces the turnaround time. But if we assume all jobs arrive at the same time, then SJF is an optimal solution.

### Preemptive Shortest Job First
To mitigate this we can use **Shortest Job to Completion First (STCF)** or also called **Preemptive Shortest Job First**. THE PSJF
scheduler will search for the shortest job when a new job arrives. The scheduler will then stop the current running job and run the shortest 
job in the queue.


## Round Robins

> The above two methods work if the running software does not need any input from the IO devices. For responsive pieces of software (Almost all modern day software)
> the response time is an important metric. It is the difference between the time a job arrived first and when it was first executed.

We need a good response time from all running jobs, you don't want the longest job to wait for completion of all jobs in order to 
finally have some input from the user. This will be a waste of resources (as IO operations are slow and the job will spend some time waiting for the input) 
and bad user experience.

So a round robins (RR) schedulers chops up the instructions of all jobs and switches between jobs every fixed interval. It is also known
as time slicing as a job will only run for a small **time slice** or **scheduling quantum**
