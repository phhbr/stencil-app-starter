import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
})
export class AppRoot {
  @State() showContent = false;

  private toggleSlot(): void {
    this.showContent = !this.showContent;
  }

  componentWillRender() {
    console.log('app-root', 'showContent', this.showContent);
  }

  render() {
    return (
      <div>
        <header>
          <h1>Stencil App Starter</h1>
        </header>

        <main>
          <play-container>{this.showContent && <play-content slot="s1"></play-content>}</play-container>
          <button onClick={() => this.toggleSlot()}>{this.showContent ? 'Hide' : 'Show'}</button>
        </main>
      </div>
    );
  }
}
