<div class="header">
        Plan Black Shop
    </div>
    <div class="admin-panel">
        <input type="text" id="searchInput" placeholder="جستجوی نام مشتری...">
        <select id="statusFilter">
            <option value="all">همه</option>
            <option value="pending">در انتظار</option>
            <option value="completed">تکمیل شده</option>
        </select>
        <?php
     
        $db = new mysqli('localhost', 'username', 'password', 'database_name');
      
        if ($db->connect_error) {
            die("اتصال ناموفق: " . $db->connect_error);
        }
       
        $query = "SELECT order_id, customer_name, status, created_at FROM orders ORDER BY created_at DESC";
        $result = $db->query($query);
        if ($result->num_rows > 0) {
            echo "<table id='ordersTable'><tr><th>شماره سفارش</th><th>نام مشتری</th><th>وضعیت</th><th>تاریخ سفارش</th></tr>";
            while($row = $result->fetch_assoc()) {
                echo "<tr><td>".$row["order_id"]."</td><td>".$row["customer_name"]."</td><td>".$row["status"]."</td><td>".$row["created_at"]."</td></tr>";
            }
            echo "</table>";
        } else {
            echo "هیچ سفارشی یافت نشد.";
        }
        $db->close();
        ?>
    </div>