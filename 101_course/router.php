<?php
	$data = [
		[
			'id' => 0,
			'name' => 'Leonardo',
			'age' => 35,
		],
		[
			'id' => 1,
			'name' => 'Ana',
			'age' => 33,
		],
		[
			'id' => 2,
			'name' => 'Miriam',
			'age' => 58,
		]
	];

	if (isset($_SERVER)){

		$base = $_SERVER;

		if (isset($base['PATH_INFO'])){

			$path = $_SERVER['PATH_INFO'];
			$method = $base['REQUEST_METHOD'];

			if ($path == '/data' && $method == 'GET'){
				echo json_encode($data);
			} else if ($path == '/data/1' && $method == 'GET') {
				echo json_encode($data[0]);
			} else if ($path == '/data/2' && $method == 'GET') {
				echo json_encode($data[1]);
			} else if ($path == '/data/3' && $method == 'GET') {
				echo json_encode($data[2]);
			}

		}

	}
?>
