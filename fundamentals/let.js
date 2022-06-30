var num = 1;
{
  let num = 2;
  console.log("inside = ", num);
  // Overrides scope
}
console.log("outside = ", num);

/* Variables declared using let have block, function and global scopes,
while the ones declared with var only have function and global */
