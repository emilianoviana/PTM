<?php 

include ('connection.php');

$nama_barang = $_POST['nama_barang'];
$harga = $_POST['harga'];
$stok = $_POST['stok'];

$sql = mysqli_query($connection, "INSERT INTO tbldata VALUES (null, '$nama_barang', '$harga', '$stok')");

if($sql){
    $result['status'] = '1';
    $result['msg'] = 'Berhasil Menambahkan Data!';
}else {
    $result['status'] = '0';
    $result['msg'] = 'Gagal Menambahkan Data!';
}
echo json_encode($result);
?>