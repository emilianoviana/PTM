<?php 

include 'connection.php';

$id = $_POST['id'];
$nama_barang = $_POST['nama_barang'];
$harga = $_POST['harga'];
$stok = $_POST['stok'];

$sql = mysqli_query($connection, "UPDATE tbldata SET nama_barang = '$nama_barang', harga = '$harga', stok = '$stok' WHERE id ='$id' ");

if($sql){
    $result['status'] = '1';
    $result['msg'] = 'Berhasil Ubah Data!';
}else {
    $result['status'] = '0';
    $result['msg'] = 'Gagal Ubah Data!';
}
echo json_encode($result);
?>