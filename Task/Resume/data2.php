<?php   
    $servername = "127.0.0.1";
    $username = "root";
    $password = "";
    $dbname="priyanka";
  
    // Creating a connection
    $conn = new mysqli($servername, $username, $password, $dbname);
  
    // Check connection
    if ($conn->connect_error) {
     die("Connection failure:" . $conn->connect_error);
    } 

    $FirstName=$_POST["FirstName"];
    $MiddleName=$_POST["MiddleName"];
    $LastName=$_POST["LastName"];
    $MobileNo=$_POST["MobileNo"];
    $Address=$_POST["Address"];

    $sql ="INSERT into data1(FirstName,MiddleName,LastName,MobileNo,Address)
    values('".$FirstName."','".$MiddleName."','".$LastName."',".$MobileNo.",'".$Address."')";

    if ($conn->query($sql) === TRUE) {
        echo "Data submitted Successfully!";
    } else {
        echo "Error: " . $conn->error;
    }
  
    // Closing connection
    $conn->close();
?>