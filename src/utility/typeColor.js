export function getTypeColor(type) {
    switch (type) {
      case "bug":
        return "rgba(28, 75, 39, 0.5)";
      case "dark":
        return "rgba(0, 0, 0, 0.5)";
      case "electric":
        return "rgba(226,227,43, 0.5)";
      case "fighting":
        return "rgba(153,64,37 ,0.5)";
      case "fire":
        return "rgba(171,31,36 ,0.5)";
      case "ghost":
        return "rgba( 51,51,107,0.5)";
      case "grass":
        return "rgba( 20,123,61, 0.5)";
      case "ground":
        return "rgba(168,112,45, 0.5)";
      case "normal":
        return "rgba(117,82,92, 0.5)";
      case "poison":
        return "rgba(94,45,137, 0.5)";
      case "psychic":
        return "rgba(165,42,108, 0.5)";
      case "rock":
        return "rgba(72,25,11, 0.5)";
      case "water":
        return "rgba(21,82,225, 0.5)";
      case "fairy":
        return "rgba(248, 126, 167, 0.5)";
      case 'steel':
        return "rgba(123, 142, 138, 0.5)";
      case 'flying':
        return "rgba(94, 185, 178, 0.5)";
      case 'ice':
        return "rgba(102, 209, 229, 0.5)";
      case 'dragon':
        return "rgba(41, 3, 106, 0.5)";
      default:
        return "";
    }
  }