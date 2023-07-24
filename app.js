let pronoun = ["the", "our", "da", "this", "my"];
let adj = ["great", "big", "super", "bright", "funny"];
let noun = ["jogger", "racoon", "boss", "player", "friend"];
let ext = [".com", ".net", "es", ".io"]

for (let capa1 = 0; capa1 < pronoun.length; capa1++) {
  for (let capa2 = 0; capa2 < adj.length; capa2++) {
    for (let capa3 = 0; capa3 < noun.length; capa3++) {
      for(let capa4 = 0; capa4 < ext.length; capa4 ++){
        console.log(pronoun[capa1] + adj[capa2] + noun[capa3] + ext[capa4]);
      }
    }
  }
}
