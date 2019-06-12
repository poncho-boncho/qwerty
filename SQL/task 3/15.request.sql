select ll.* from low_worker_worker l 
inner join worker w on l.worker_id=w.id
inner join low_worker ll on ll.id =l.low_worker_id
where w.id =1