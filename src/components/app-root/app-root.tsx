import { Component, h, /*getAssetPath*/ } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
  // assetsDirs: ['assets'],
})
export class AppRoot {
  render() {
    console.log(process.env.BASE_PATH);
    console.log(process.env.CALENDAR_ID);

    return (
      <div>
        <header>
          <h1>Hello Stencil App Starter</h1>
        </header>

        {/*<img src={getAssetPath('assets/icon/icon.png')} alt="icon" />*/}
        <img src="assets/icon/icon.png" alt="icon" />

        <main>
          <stencil-router root="/vacations-calendar/">
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
