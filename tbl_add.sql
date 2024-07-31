CREATE TABLE attendance_tbl --update this line
(
    date DATE,
    shift NVARCHAR(50),
	area NVARCHAR(50),
    measure FLOAT)

ALTER TABLE attendance_tbl --update this line
ADD id INT NOT NULL IDENTITY(1,1);

ALTER TABLE attendance_tbl --update this line
ADD CONSTRAINT PK_attendance_tbl_id PRIMARY KEY (id); --update this line


INSERT INTO attendance_tbl(date, shift, area, measure) --update this line
VALUES 
('2024-07-01', '1', 'actual hc', 77), --update this line
('2024-07-01', '1', 'planned hc', 127); --update this line

/*
ALTER TABLE dbo.kpi_tbl
ADD area VARCHAR(50) NULL;
*/
