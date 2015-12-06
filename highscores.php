<?php

// Establish the database conection
$link = mysqli_connect("localhost", "outdzgjd_yahtzee", "cucs_yahtzee", "outdzgjd_highscores");
if (isset($_POST['name']) && isset($_POST['score'])) {
	// Sanitize user input
	$name = strip_tags(mysqli_real_escape_string($link, $_POST['name']));
	$score = intval(strip_tags(mysqli_real_escape_string($link, $_POST['score'])));
	
	// Update the database with the score
	$sql = "INSERT INTO highscores (name, score) VALUES ( '$name', $score )";
	mysqli_query($link, $sql);
}

// Grab the latest highscores 
$result = mysqli_query($link, "SELECT name, score FROM highscores ORDER BY SCORE DESC LIMIT 100");

if (!$result) {
	$message = "Invalid query: " . mysqli_error($link) . "\n";
	$message .= "Whole query: " . $query;
	die($message);
}
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Highscores</title>
	<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
	<link rel="stylesheet" href="css/style.css">
</head>
<body>
	<div class="container">
		<h1>Highscores</h1>
		<table class="highscore_table">
			<tr>
				<th>Name</th>
				<th>Score</th>
			</tr>
			<?php 	// Output the highscores
				while ($row = mysqli_fetch_assoc($result)) {
					echo "<tr>\n\t<td>" . $row['name'] . "</td>\n\t<td>" . $row['score'] . "</td>\n</tr>\n";
				}
				mysqli_free_result($result);
				mysqli_close($link);
			?>
		</table>
	</div>
</body>
</html>
