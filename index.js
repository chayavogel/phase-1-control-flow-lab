

function scuberGreetingForFeet(distance){
  if (distance <= 400) {
    return 'This one is on me!';
  } else if (distance <= 2000) {
    return 'That will be twenty bucks.';
  } else if (distance <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else {
    return 'No can do.';
  }
}

function ternaryCheckCity(city){
return (city === "NYC") ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(value){
  switch (value) {
case value = ('generous'):
  return ('Thank you so much.');
  break;
case value = ('not as generous'):
  return ('Thank you.');
  break;
default:
return ("Bye.");
  }
}
