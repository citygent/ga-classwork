# a = ["Anil", "Erik", "Jonathan"]
# puts a[1]

# a.push("James")
# puts a

#B

# h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}
# puts h[1]
# puts h[:two]
# puts h["two"]
# h[3] = "Three"
# puts h
# h[:four] = 4
# puts h

# is = {true => "It's true!", false => "It's false"}
# puts is[2 + 2 == 4]
# #It's true!
# puts is["Erik" == "Jonathan"]
# #It's false!
# puts is[9 > 10]
# #It's false!
# puts is[0]
# #nil
# puts is["Erik"]
# #nil

users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}

users