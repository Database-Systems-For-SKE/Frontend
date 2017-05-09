<?php
$db = mysqli_connect('localhost', 'root', '', 'Hotel Management') or die('Error connecting to database');

if (!empty($_POST)) {
    $key = $_POST['key'];
    if ($key == 'insert_customer') {
        insert_customer(1000, $_POST['first_name'], $_POST['last_name'], $_POST['address'], $_POST['email'], md5($_POST['password']));
    } else if ($key == "login") {
        login($_POST['input_email'], md5($_POST['input_password']));
    } else if ($key == "payment") {
        insert_payment(1000, $_POST['nameOnCard'], $_POST['creditCardNo'], $_POST['expireDate']);
    }
}

function insert_customer($customerID, $firstName, $lastName, $address, $email, $password)
{
    $db = $GLOBALS['db'];
    $sql = "INSERT INTO CustomerDetail VALUES ('DEFAULT', '$firstName', '$lastName',
      '$address', '$email', '$password')";
    if (mysqli_query($db, $sql)) {
        echo "records inserted to customer successfully.";
    } else {
        echo "error: could not able to execute $sql. " . mysqli_error($db);
    }
}

/* function checkout($customerID) {
  $db = $GLOBALS['db'];
  $sql = "DELETE FROM Booking WHERE Booking.customerID = customerID";
} */

function login($email, $password)
{
    $db = $GLOBALS['db'];
    $sql = "SELECT * FROM CustomerDetail WHERE email LIKE '$email' AND password LIKE '$password'";
    $result = mysqli_query($db, $sql);
    $count = mysqli_num_rows($result);
    if ($count == 1) {
        /* connect to the next page */
    }
    if (mysqli_query($db, $sql)) {
        echo "records searched successfully.";
    } else {
        echo "error: could not able to execute $sql. " . mysqli_error($db);
    }
}

function insert_payment($paymentID, $nameOnCard, $creditCardNo, $expireDate)
{
    $db = $GLOBALS['db'];
    $sql = "INSERT INTO Payment VALUES ('DEFAULT', '$nameOnCard', '$creditCardNo',
      '$expireDate')";
    if (mysqli_query($db, $sql)) {
        echo "records inserted payment successfully.";
    } else {
        echo "error: could not able to execute $sql. " . mysqli_error($db);
    }
}

function booking($bookingID, $numberOfNight, $checkInDate, $checkOutDate, $roomID, $customerID) {
  $db = $GLOBALS['db'];
  $sql = "INSERT INTO Booking VALUES ('DEFAULT', '$numberOfNight', '$checkInDate', '$checkOutDate', '$roomID', '$customerID')";
  if (mysqli_query($db, $sql)) {
      echo "records inserted booking successfully.";
  } else {
      echo "error: could not able to execute $sql. " . mysqli_error($db);
  }
}

?>
