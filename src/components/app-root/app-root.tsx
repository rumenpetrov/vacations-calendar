import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <div>
        <header>
          <h1>Hello Stencil App Starter</h1>
        </header>

        <ul>
          <li>{process.env.CI_TEST}</li>
          <li>{process.env.BASE_PATH}</li>
          <li>{process.env.CALENDAR_ID}</li>
          <li>{process.env.RR_TEST}</li>
        </ul>

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
