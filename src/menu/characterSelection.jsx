import React, { Component } from "react";
import CharacterButton from "./characterButton";

const PERSONAGENS = [
  { id: 1, nome: "Anderson" },
  { id: 2, nome: "Duarte" },
  { id: 3, nome: "Fernanda" },
  { id: 4, nome: "Gilberto" },
  { id: 5, nome: "Kaiser" },
  { id: 6, nome: "Maico" },
  { id: 7, nome: "Perin" },
  { id: 8, nome: "Veiga" }
];

class CharacterSelection extends Component {
  state = {
    players: [
      { personagemSelecionado: 4, color: "blue" },
      { personagemSelecionado: 3, color: "red" },
      { personagemSelecionado: 6, color: "green" }
    ]
  };

  findPlayerFromCharacter = (players, personagem) => {
    return players[
      players.findIndex(p => p.personagemSelecionado === personagem.id)
    ];
  };

  render() {
    const { players } = this.state;
    return (
      <React.Fragment>
        {PERSONAGENS.map(personagem => (
          <CharacterButton
            key={personagem.id}
            personagem={personagem}
            player={this.findPlayerFromCharacter(players, personagem)}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default CharacterSelection;
