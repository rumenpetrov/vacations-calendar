import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  render() {
    console.log('BASE_PATH: ', process.env.BASE_PATH);
    console.log('CALENDAR_ID: ', process.env.CALENDAR_ID);
    console.log('GH RR_TEST: ', process.env.RR_TEST);
    console.log('CI_TEST: ', process.env.CI_TEST);

    return (
      <div>
        <header>
          <h1>Hello Stencil App Starter</h1>
        </header>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="app-home" exact={true} />
              <stencil-route url="/profile/:name" component="app-profile" />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
