SELECT Table1.ID, Table1.Name, Table2.Name AS 'ParentName'
FROM temp_project AS Table1 LEFT JOIN temp_project AS Table2 on Table1.parent_id = Table2.id

