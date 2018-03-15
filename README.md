# Custom Bootstrap

Customize [Bootstrap 4](https://getbootstrap.com) with [Parcel](https://parceljs.org).

## How to use

1.  Clone this repository.

    ```bash
    git clone https://github.com/yasminzy/custom-bootstrap.git
    ```

2.  Install Parcel.

    ```bash
    sudo npm i -g parcel-bundler
    ```

3.  Go to the repo directory and install the dependencies.

    ```bash
    npm i
    ```

4.  Run Parcel's development server and go to [localhost:1234](localhost:1234).

    ```bash
    parcel index.html
    ```

5.  Edit `scss/custom.scss` or duplicate it and rename the file to your project name. Just make sure `index.js` imports the right file.

    * **Color**

      You can either use the color from `scss/_material-color.scss` or your own color.

    * **Variables**

      Copy the rules you want to change from `node_modules/bootstrap/scss/_variables.scss` and override the value.

    * **Components**

      Comment the components you don't need.

6.  If you're done, stop the server with `Ctrl+C` and start the build mode.

    ```bash
    parcel build index.html
    ```

    You can find the customized Bootstrap in `dist/custom-bootstrap.css`.
