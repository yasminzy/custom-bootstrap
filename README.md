# Custom Bootstrap

Customize [Bootstrap 5](https://getbootstrap.com/) with [Parcel](https://parceljs.org/).

## How to use

1. Clone this repository.

   ```zsh
   git clone https://github.com/yasminzy/custom-bootstrap.git
   ```

1. Go to the repo directory and install the dependencies.

   ```zsh
   pnpm i
   ```

1. Run Parcel's development server and go to [localhost:1234](localhost:1234).

   ```zsh
   npx parcel index.html
   ```

1. Edit `scss/custom.scss`.

   - **Color**

     You can use either the color from `scss/_material-color.scss` or your own color.

   - **Variables**

     Copy the rules you want to change from `node_modules/bootstrap/scss/_variables.scss` and override the value.

   - **Components**

     Comment out the components you don't need.

1. If you're done, stop the dev server and start the build mode.

   ```zsh
   npx parcel build index.html
   ```

   You can find the customized Bootstrap in `dist/index.[xxxxxxxx].css`.
