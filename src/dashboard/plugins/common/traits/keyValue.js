export default (editor, options) => {
  editor.TraitManager.addType('key-value', {
    events: {
      'click .key-value__remove': 'handleRemoveItem',
      'click .key-value__add': 'handleAddItem',
    },

    onChange() {
      const { splitor=':' } = this.model.attributes;
      const eleWrap = this.getInputEl();
      const currentObj = {};
      eleWrap.find('.key-value__item').each(function(i, el) {
        const key = $(el).children('.key-value__key').val().trim();
        const value = $(el).children('.key-value__value').val().trim().replace(/\n/g, ' ').replace(/\'/g, "\\'").replace(/"/g, '\\"');
        currentObj[key] = value;
      });
      const currents = Object.keys(currentObj).map(function(key) {
        return `${key}${splitor} ${currentObj[key]}`;
      })
      this.model.set('value', currents.join(', '));
    },

    handleAddItem() {
      const { maxLength } = this.model.attributes;
      const currentLength = this.$keyValueElem.children('.key-value__item').length;
      if (!maxLength || currentLength < maxLength) {
        const item = this.getKeyValueItem();
        this.$keyValueElem.append(item);
      }
    },

    getInputEl() {
      if (!this.$keyValueElem) {
        const { model } = this;
        const { name, splitor=':' } = model.attributes;
        const valueStr = model.getTargetValue();
        const initObj = {};
        valueStr.split(',').forEach(function(item, i) {
          if (item.indexOf(splitor) > 0) {
            const _item = item.split(splitor);
            const key = _item[0].trim();
            const value = _item[1].trim();
            initObj[key] = value;
          } else if (name == 'legendPosition') {
            switch (i) {
              case 0:
                initObj['left'] = item;
                break;
              case 1:
                initObj['top'] = item;
                break;
              case 2:
                initObj['right'] = item;
                break;
              case 3:
                initObj['bottom'] = item;
                break;
            }
          }
        });
        
        let el = `
          <div style="text-align: right"><a class="key-value__add"><i class="fa fa-plus"></i></a></div>
        `;

        this.keyValueElem = el;
        this.$keyValueElem = $(el);
        if (initObj) {
          for(var prop in initObj) {
            const item = this.getKeyValueItem(prop, initObj[prop]);
            this.$keyValueElem.append(item);
          }
        }
      }
  
      return this.$keyValueElem;
    },

    getKeyValueItem(key, value) {
      const { placeholder='', options, splitor=':', width, valueType } = this.model.attributes;
      let placeholderArray;
      if (placeholder.indexOf(splitor) > 0) {
        placeholderArray = placeholder.split(splitor);
      } else {
        placeholderArray = [placeholder, ''];
      }
      let width_key;
      let width_value;
      if (width && width.indexOf(splitor) > 0) {
        const width_key_value = width.split(splitor);
        width_key = width_key_value[0].trim();
        width_value = width_key_value[1].trim();
      } else if (width) {
        width_key = width;
        width_value = width;
      }
      let inputItem = `<input class="key-value__value" value="${value || ''}" placeholder="${placeholderArray[1]}" style="${width_value ? 'flex-basis: ' + width_value : ''}" />`;
      if (options.length) {
        inputItem = `
          <select class="key-value__value" value="${value || ''}" placeholder="${placeholderArray[1]}" style="${width_value ? 'flex-basis: ' + width_value : ''}">
            ${options.map(opt => {
              const _value = opt.id || opt;
              const _name = opt.name || opt;
              return `<option value="${_value}" ${_value == value ? 'selected="selected"' : ''}>${_name}</option>`
            })}
          </select>`;
      }
      if (valueType == 'textarea') {
        inputItem = `
          <textarea class="key-value__value" value="${value || ''}" placeholder="${placeholderArray[1]}" style="${width_value ? 'flex-basis: ' + width_value : ''}">${value || ''}</textarea>
        `
      }
      return `
        <div class="key-value__item">
          <input class="key-value__key" value="${key || ''}" placeholder="${placeholderArray[0]}" style="${width_key ? 'flex-basis: ' + width_key : ''}" />
          <span> : </span>
          ${inputItem}
          <a class="key-value__remove"><i class="fa fa-minus"></i></a>
        </div>
      `;
    },

    handleRemoveItem(e) {
      $(e.target).parents('.key-value__item').remove();
      this.onChange();
    },

    renderField() {
      const el = this.getInputEl().get(0);
      this.$el.find('.' + this.ppfx + 'field').append(el);
    },
  })
}