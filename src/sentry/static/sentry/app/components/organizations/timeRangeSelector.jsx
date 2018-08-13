import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {Box} from 'grid-emotion';

import DateTimeField from 'app/components/forms/dateTimeField';
import DropdownLink from 'app/components/dropdownLink';
import Button from 'app/components/buttons/button';
import DynamicWrapper from 'app/components/dynamicWrapper';
import {t} from 'app/locale';

import HeaderItem from './headerItem';

class TimeRangeSelector extends React.Component {
  static propTypes = {
    start: PropTypes.string,
    end: PropTypes.string,
    onChange: PropTypes.func,
    onUpdate: PropTypes.func,
  };

  formatDate(date) {
    return moment(date).format('MMMM D, h:mm a');
  }

  render() {
    const {className, start, end, onChange, onUpdate} = this.props;
    const summary = `${this.formatDate(start)} to ${this.formatDate(end)}`;

    return (
      <HeaderItem label={t('Time range')} className={className}>
        <DropdownLink
          title={<DynamicWrapper value={summary} fixed="start to end" />}
          keepMenuOpen={true}
          anchorRight={true}
        >
          <Box p={2}>
            update time range (UTC)
            <DateTimeField
              name="start"
              label={t('From')}
              value={start}
              onChange={val => onChange('start', val)}
            />
            <DateTimeField
              name="end"
              label={t('To')}
              value={end}
              onChange={val => onChange('end', val)}
            />
            <Button onClick={onUpdate}>{t('Update')}</Button>
          </Box>
        </DropdownLink>
      </HeaderItem>
    );
  }
}

export default TimeRangeSelector;
