<?php if(isset($customer)) : ?>

    <table>
        <thead>
            <tr>
            <th>Customer Name</th>
        </tr>
        </thead>
        <tbody>
            <tr>
                <td><?= $customer['customerName'] ?></td>
            </tr>
        </tbody>

    </table>

<?php endif ?>