/* 6.	Coding exercise:  Availity receives enrollment files from various benefits management and enrollment solutions
 (I.e. HR platforms, payroll platforms).  Most of these files are typically in EDI format.  
 However, there are some files in CSV format.  
 For the files in CSV format,
 *** write a program that will read the content of the file and separate enrollees by insurance company in its own file. 
 ***Additionally, sort the contents of each file by last and first name (ascending).  
 ***Lastly, if there are duplicate User Ids for the same Insurance Company, then only the record with the highest version should be included. 
 The following data points are included in the file:
•	User Id (string)
•	First Name (string) 
•	Last Name (string)
•	Version (integer)
•	Insurance Company (string) */

// ex: '12', 'Carrye', 'Gaulin', 2, 'Aetna'

// For the first part pull the last element out or every 5th element out
// Do a compare function 
// Send that entry to the associated file.

// For second part a sorting method for ASC

// Last another compare function for first and last element
// If both not true 