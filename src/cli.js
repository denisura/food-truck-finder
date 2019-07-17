import ora from 'ora';
import chalk from 'chalk';

import configureStore from './store/';
import { show, more } from './store/actions';
import { statusSelector, hasMoreSelector } from './store/meta/selectors';
import { trucksSelector } from './store/trucks/selectors';
import { OK, ERROR, LOADING } from './store/constants';
import config from './config';
import getApiClient from './services/api';
import { observeStore, promptShowMore, promptTryAgain } from './utils';

export async function cli(args) {
  const spinner = ora('Fetching food trucks data...');
  async function watchStatus(status, state) {
    switch (status) {
      case OK:
        spinner.stop();
        const trucks = trucksSelector(state);
        if (trucks.length === 0) {
          spinner.succeed('No food trucks');
          return;
        }
        trucks.map(truck =>
          console.log(chalk.yellow(truck.applicant) + ' ' + truck.location)
        );

        if (hasMoreSelector(state)) {
          const answer = await promptShowMore();
          if (answer.more) {
            store.dispatch(more());
          }
        }
        break;
      case ERROR:
        spinner.fail('Food truck data is not accessible');
        const answer = await promptTryAgain();
        if (answer.try) {
          store.dispatch(show());
        }
        break;
      case LOADING:
        spinner.start();
        break;
    }
  }

  const apiClient = getApiClient(config.services.api);
  let store = configureStore(config.state, { apiClient });

  observeStore(store, statusSelector, watchStatus);
  store.dispatch(show());
}
