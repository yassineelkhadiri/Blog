import { Injectable } from '@angular/core';
import { Article } from '../model/article.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  constructor(private http: HttpClient) {}

  selectedArticle: Article;
  myArticles: Article[];
  articles: Article[] = [
    {
      //some error with datat base that's why i hardcoded some exampless
      categorie: 'Business',
      title: 'Should Product Owners think like entrepreneurs?',
      resume:
        'Front is a financial technology company. We build products. We do it fast and we do it well.',
      img: './assets/img/article/img1.jpg',

      author: 'yassine@email.com',
      authorImg: './assets/img/profile/yassine.jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum       dolor sit amet consectetur adipiscing elit. Orci sagittis eu volutpat       odio facilisis mauris sit amet. In massa tempor nec feugiat nisl.       Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit       lectus. Scelerisque viverra mauris in aliquam sem fringilla. Et tortor       consequat id porta nibh venenatis cras sed felis. Euismod elementum nisi       quis eleifend quam adipiscing. Massa sed elementum tempus egestas sed       sed risus pretium quam. Auctor elit sed vulputate mi sit. Nec nam       aliquam sem et. Id velit ut tortor pretium viverra. Arcu risus quis       varius quam quisque id. Orci nulla pellentesque dignissim enim sit amet       venenatis urna. Molestie nunc non blandit massa enim nec. Malesuada       bibendum arcu vitae elementum curabitur vitae nunc. Integer quis auctor       elit sed. Mauris ultrices eros in cursus turpis massa tincidunt dui.       Varius sit amet mattis vulputate enim. Auctor urna nunc id cursus metus ',
      Id: '123',
    },

    {
      categorie: 'Creative',
      title: 'This Watch gym partnerships give you perks for working out',
      resume:
        'Front is a financial technology company. We build products. We do it fast and we do it well.',
      img: './assets/img/article/img2.jpg',
      author: 'nour@email.com',
      authorImg: './assets/img/profile/nour.jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum       dolor sit amet consectetur adipiscing elit. Orci sagittis eu volutpat       odio facilisis mauris sit amet. In massa tempor nec feugiat nisl.       Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit       lectus. Scelerisque viverra mauris in aliquam sem fringilla. Et tortor       consequat id porta nibh venenatis cras sed felis. Euismod elementum nisi       quis eleifend quam adipiscing. Massa sed elementum tempus egestas sed       sed risus pretium quam. Auctor elit sed vulputate mi sit. Nec nam       aliquam sem et. Id velit ut tortor pretium viverra. Arcu risus quis       varius quam quisque id. Orci nulla pellentesque dignissim enim sit amet       venenatis urna. Molestie nunc non blandit massa enim nec. Malesuada       bibendum arcu vitae elementum curabitur vitae nunc. Integer quis auctor       elit sed. Mauris ultrices eros in cursus turpis massa tincidunt dui.       Varius sit amet mattis vulputate enim. Auctor urna nunc id cursus metus ',
      Id: '321',
    },
    {
      categorie: 'Environment',
      title:
        'nteger fermentum justo non mauris sagittis, quis ultrices turpis ',
      resume:
        'Proin ligula urna, bibendum sit amet sodales vel, molestie ac ipsum.  Quisque in turpis vel ligula tristique rhoncus',
      img: './assets/img/article/img3.jpg',
      author: 'nizar@email.com',
      authorImg: '../assets/img/profile/nizar.jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum       dolor sit amet consectetur adipiscing elit. Orci sagittis eu volutpat       odio facilisis mauris sit amet. In massa tempor nec feugiat nisl.       Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit       lectus. Scelerisque viverra mauris in aliquam sem fringilla. Et tortor       consequat id porta nibh venenatis cras sed felis. Euismod elementum nisi       quis eleifend quam adipiscing. Massa sed elementum tempus egestas sed       sed risus pretium quam. Auctor elit sed vulputate mi sit. Nec nam       aliquam sem et. Id velit ut tortor pretium viverra. Arcu risus quis       varius quam quisque id. Orci nulla pellentesque dignissim enim sit amet       venenatis urna. Molestie nunc non blandit massa enim nec. Malesuada       bibendum arcu vitae elementum curabitur vitae nunc. Integer quis auctor       elit sed. Mauris ultrices eros in cursus turpis massa tincidunt dui.       Varius sit amet mattis vulputate enim. Auctor urna nunc id cursus metus ',
      Id: '132',
    },
  ];

  createAndStorearticle(article: Article) {
    this.http
      .post<{ name: string }>(
        'https://blog-92a12-default-rtdb.europe-west1.firebasedatabase.app/articles.json',
        article
      )
      .subscribe();
  }

  fetcharticles() {
    this.http
      .get<{ [key: string]: Article }>(
        'https://blog-92a12-default-rtdb.europe-west1.firebasedatabase.app/articles.json'
      )
      .pipe(
        map((responseData) => {
          const articlesArray: Article[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              articlesArray.push(responseData[key]);
            }
          }

          return articlesArray;
        })
      )
      .subscribe((articles) => {
        this.setArticles(articles);
      });
  }

  setArticles(articles: Article[]) {
    this.articles = articles;
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
