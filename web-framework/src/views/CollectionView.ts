import { Collection } from '../models/Collection';

export abstract class CollectionView<T, U> {
  constructor(
    public parentElement: Element,
    public collection: Collection<T, U>
  ) {}

  abstract renderItem(model: T, itemParent: Element): void;

  render(): void {
    this.parentElement.innerHTML = '';
    const templateElement = document.createElement('template');

    for (let model of this.collection.models) {
      const itemParent = document.createElement('div');
      this.renderItem(model, itemParent);
      templateElement.content.append(itemParent);
    }
    this.parentElement.append(templateElement.content);
  }
}