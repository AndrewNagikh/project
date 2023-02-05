import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';
import ReactRefreshTypeScript from 'react-refresh-typescript';

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {
    const typeScriptLoader = {
      test: /\.tsx?$/,
      use: [
        {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
            getCustomTransformers: () => ({
              before: [ReactRefreshTypeScript()],
            }),
            allowTsInNodeModules: true,
          },
        },
      ],
    };
      const cssLoaders = {
        test: /\.s[ac]ss$/i,
        use: [
          isDev ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                auto: (resPath: string) => Boolean(resPath.includes('.module.scss')),
                  localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
              },
            }
          },
          "sass-loader",
        ],
      };
      const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      }
      const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      }
    return [
        typeScriptLoader,
        cssLoaders,
        svgLoader,
        fileLoader
      ]
};
