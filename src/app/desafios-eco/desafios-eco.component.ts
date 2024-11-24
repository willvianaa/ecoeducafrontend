import { Component } from '@angular/core';

interface Postagem {
  nome: string;       // Nome da criança
  descricao: string;  // Descrição da postagem
  imagem: string;     // Base64 ou URL da imagem
  pontos: number;     // Pontos atribuídos à postagem
  checkList: {        // Itens do checklist
    item: string;
    feito: boolean;
  }[];
}

@Component({
  selector: 'app-desafios-eco',
  templateUrl: './desafios-eco.component.html',
  styleUrl: './desafios-eco.component.css'
})
export class DesafiosEcoComponent {
  postagens: Postagem[] = []; // Lista de postagens
  nome: string = '';
  descricao: string = '';
  imagem: string | ArrayBuffer | null = null;

  // Manipula o upload da imagem
  onImageSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagem = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  // Adiciona uma nova postagem
  adicionarPostagem(): void {
    if (this.nome && this.descricao && this.imagem) {
      const novaPostagem: Postagem = {
        nome: this.nome,
        descricao: this.descricao,
        imagem: this.imagem as string,
        pontos: Math.floor(Math.random() * 101),
        checkList: [
          { item: 'Embalar com segurança', feito: false },
          { item: 'Levar no horário certo', feito: false },
          { item: 'Explicar o desafio para os colegas', feito: false },
        ],
      };
      this.postagens.push(novaPostagem);
      this.limparFormulario();
    } else {
      alert('Por favor, preencha todos os campos!');
    }
  }

  // Marca um item do checklist como concluído
  marcarCheckList(postagem: Postagem, index: number): void {
    postagem.checkList[index].feito = !postagem.checkList[index].feito;
  }

  // Limpa o formulário após o envio
  limparFormulario(): void {
    this.nome = '';
    this.descricao = '';
    this.imagem = null;
  }
}

