There isn't a lot of work to do in database practicals. Using department SSH is mostly enough. But in case you want to do something on your own, here is something useful.

# Environment
## Using `psql` from your own computer
Install psql
```bash
sudo apt install -y postgresql-client
```

Map department postgresql port to your own machine using SSH. (Otherwise inaccessible from your own computer)
```bash
ssh -N -L 0.0.0.0:5432:tr01:5432 your_user_name@the_server_address
```

Connect using psql
```bash
psql -U your_user_name -d 127.0.0.1
```

## Running PHP on your computer
Install php and php-pgsql
```
sudo apt install php php-pgsql
```

Replace `$dbconn` line
```php
$dbconn = pg_connect("host=127.0.0.1 dbname=dbprac1 user=your_user_name")
```

Starting PHP Server.
```bash
php -S 0.0.0.0:10000
```

# VSCode
## Extension
[SQLTools](https://marketplace.visualstudio.com/items?itemName=mtxr.sqltools)

[SQLTools PostgreSQL Driver](https://marketplace.visualstudio.com/items?itemName=mtxr.sqltools-driver-pg)

SQL language server like. Show query in a vscode tab as a table.

[PHP IntelliSense](https://marketplace.visualstudio.com/items?itemName=felixfbecker.php-intellisense)

PHP Language server. No other tools required.