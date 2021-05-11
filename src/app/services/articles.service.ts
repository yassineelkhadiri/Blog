import { Injectable } from '@angular/core';
import { Article } from '../model/article.model';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  constructor() {}

  selectedArticle: Article;
  myArticles: Article[];
  articles: Article[] = [
    {
      categorie: 'Business',
      title: 'Should Product Owners think like entrepreneurs?',
      resume:
        'Front is a financial technology company. We build products. We do it fast and we do it well.',
      img: './assets/img/900x450/img1.jpg',
      author: 'sabri@email.com',
      authorImg: './src/assets/img/official/profile.png',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum       dolor sit amet consectetur adipiscing elit. Orci sagittis eu volutpat       odio facilisis mauris sit amet. In massa tempor nec feugiat nisl.       Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit       lectus. Scelerisque viverra mauris in aliquam sem fringilla. Et tortor       consequat id porta nibh venenatis cras sed felis. Euismod elementum nisi       quis eleifend quam adipiscing. Massa sed elementum tempus egestas sed       sed risus pretium quam. Auctor elit sed vulputate mi sit. Nec nam       aliquam sem et. Id velit ut tortor pretium viverra. Arcu risus quis       varius quam quisque id. Orci nulla pellentesque dignissim enim sit amet       venenatis urna. Molestie nunc non blandit massa enim nec. Malesuada       bibendum arcu vitae elementum curabitur vitae nunc. Integer quis auctor       elit sed. Mauris ultrices eros in cursus turpis massa tincidunt dui.       Varius sit amet mattis vulputate enim. Auctor urna nunc id cursus metus ',
      Id: '123',
    },

    {
      categorie: 'Creative',
      title: 'This Watch gym partnerships give you perks for working out',
      resume:
        'Front is a financial technology company. We build products. We do it fast and we do it well.',
      img: './assets/img/900x450/img13.jpg',
      author: 'sabri@email.com',
      authorImg: './src/assets/img/official/profile.png',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum       dolor sit amet consectetur adipiscing elit. Orci sagittis eu volutpat       odio facilisis mauris sit amet. In massa tempor nec feugiat nisl.       Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit       lectus. Scelerisque viverra mauris in aliquam sem fringilla. Et tortor       consequat id porta nibh venenatis cras sed felis. Euismod elementum nisi       quis eleifend quam adipiscing. Massa sed elementum tempus egestas sed       sed risus pretium quam. Auctor elit sed vulputate mi sit. Nec nam       aliquam sem et. Id velit ut tortor pretium viverra. Arcu risus quis       varius quam quisque id. Orci nulla pellentesque dignissim enim sit amet       venenatis urna. Molestie nunc non blandit massa enim nec. Malesuada       bibendum arcu vitae elementum curabitur vitae nunc. Integer quis auctor       elit sed. Mauris ultrices eros in cursus turpis massa tincidunt dui.       Varius sit amet mattis vulputate enim. Auctor urna nunc id cursus metus ',
      Id: '321',
    },
  ];

  getUserArticles(author: string) {
    const i = this.articles.indexOf(
      this.articles.find((article) => article.author == author)
    );
    return this.articles[i];
  }

  addArticle(article: Article) {
    this.articles.push(article);
  }

  getArticals() {
    return this.articles;
  }

  setSelectedarticle(article: Article) {
    this.selectedArticle = article;
  }

  getSelectedArticle() {
    return this.selectedArticle;
  }

  getMyArticles(author: string) {
    this.myArticles = [];
    this.articles.map((article) => {
      if (article.author == author) this.myArticles.push(article);
    });
    return this.myArticles;
  }
}
