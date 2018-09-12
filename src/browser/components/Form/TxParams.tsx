import * as React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormGroup from '@material-ui/core/FormGroup';
import Slider from '@material-ui/lab/Slider';

import InputWrapper, { Wrapper } from '../Form/InputWrapper';
import { MsgFieldDict } from '../../util/form';

interface Props {
  handleMsgChange: React.ChangeEventHandler<HTMLInputElement>;
  handleGasPriceChange: (e: any, value: any) => void;
  values: MsgFieldDict;
}

export default class TxParams extends React.Component<Props> {
  render() {
    const { handleMsgChange, handleGasPriceChange, values } = this.props;
    return (
      <FormGroup classes={{ root: 'form' }}>
        <InputWrapper error={values._amount.error}>
          <InputLabel htmlFor="_amount">Amount (Uint128)</InputLabel>
          <Input
            onChange={handleMsgChange}
            id="_amount"
            name="_amount"
            value={values._amount.value}
          />
          {values._amount.error && <FormHelperText>Please fill in a valid value</FormHelperText>}
        </InputWrapper>
        <InputWrapper error={values.gaslimit.error}>
          <InputLabel htmlFor="gaslimit">Gas Limit (Uint128)</InputLabel>
          <Input
            onChange={handleMsgChange}
            id="gaslimit"
            name="gaslimit"
            value={values.gaslimit.value}
          />
          {values.gaslimit.error && <FormHelperText>Please fill in a valid value</FormHelperText>}
        </InputWrapper>
        <Wrapper>
          <InputLabel htmlFor="gasprice">Gas Price: {values.gasprice.value}</InputLabel>
          <Slider
            onChange={handleGasPriceChange}
            value={values.gasprice.value}
            min={1}
            max={100}
            step={1}
          />
        </Wrapper>
      </FormGroup>
    );
  }
}
