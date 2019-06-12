ALTER TABLE low_worker_worker
ADD FOREIGN KEY(worker_id) REFERENCES worker(id);