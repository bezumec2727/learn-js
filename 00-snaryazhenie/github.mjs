const response = await fetch("https://api.github.com/users/bezumec2727");

if (!response.ok) {
  console.log("Ошибка! Статус:", response.status);
} else {
  const data = await response.json();
  console.log("Логин:", data.login);
}