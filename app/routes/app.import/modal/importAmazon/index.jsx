import React from 'react';
import { FormLayout, Select, TextField, Thumbnail } from '@shopify/polaris';

const ReviewFormLayoutAmazon = ({
  url,
  handleUrlChange,
  selectedReview,
  handleSelectChange,
  selectedQuantity,
  handleSelectChangeQuantity,
  optionsCountry,
  changeHandler,
  options,
  optionsQuantity,
  value,imageSrc,id,title
}) => {
  return (
    <FormLayout>
    <div className='flex flex-row items-stretch w-full'>
      <Thumbnail
        source={imageSrc}
        size="large"
        alt={title}
      />
      <div className='flex-1 ml-4 flex flex-col justify-end'>
        <p>{title}</p>
        <TextField
          value={url}
          type="url"
          onChange={handleUrlChange}
          autoComplete="off"
        />
      </div>
    </div>
    <Select
      label="Content option"
      options={options}
      onChange={handleSelectChange}
      value={selectedReview}
    />
    <Select
      label="Review quantity"
      options={optionsQuantity}
      onChange={handleSelectChangeQuantity}
      value={selectedQuantity}
    />
    <div className='flex flex-row w-full'>
      <div className="w-1/2 pr-2">
        <Select
          label="Auto update reviews (👍love)"
          options={optionsQuantity}
          onChange={handleSelectChangeQuantity}
          value={selectedQuantity}
        />
      </div>
      <div className="w-1/2 pl-2">
        <Select
          label="Review language"
          options={optionsCountry}
          onChange={changeHandler}
          value={value}
        />
      </div>
    </div>
    <div className='flex flex-row w-full'>
      <div className="w-1/2 pr-2">
        <Select
          label="Reviewer country"
          options={optionsCountry}
          onChange={changeHandler}
          value={value}
        />
      </div>
      <div className="w-1/2 pl-2">
        <Select
          label="Name language"
          options={optionsCountry}
          onChange={changeHandler}
          value={value}
        />
      </div>
    </div>
    <div className='flex flex-row w-full'>
      <div className="w-1/2 pr-2">
        <Select
          label="Reviewer country"
          options={optionsCountry}
          onChange={changeHandler}
          value={value}
        />
      </div>
      <div className="w-1/2 pl-2">
        <Select
          label="Name language"
          options={optionsCountry}
          onChange={changeHandler}
          value={value}
        />
      </div>
    </div>
    <div className='flex flex-row w-full'>
      <div className="w-1/2 pr-2">
        <Select
          label="Reviewer country"
          options={optionsCountry}
          onChange={changeHandler}
          value={value}
        />
      </div>
      <div className="w-1/2 pl-2">
        <Select
          label="Name language"
          options={optionsCountry}
          onChange={changeHandler}
          value={value}
        />
      </div>
    </div>
  </FormLayout> 
  );
};

export default ReviewFormLayoutAmazon;
