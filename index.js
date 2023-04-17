"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const form = document.querySelector('#defineform');
const list = document.querySelector('.list-unstyled');
const header = document.querySelector('h1');
form.addEventListener('submit', (event) => __awaiter(void 0, void 0, void 0, function* () {
    event.preventDefault();
    const formData = new FormData(event.target);
    const text = formData.get('defineword');
    try {
        const response = yield fetch(https); //api.dictionaryapi.dev/api/v2/entries/en/${text});
        const data = yield response.json();
        header.textContent = text;
        list.innerHTML = '';
        data[0].meanings.forEach(({ partOfSpeech, definitions }) => {
            const li = document.createElement('li');
            li.textContent = $;
            {
                partOfSpeech;
            }
            -$;
            {
                definitions[0].definition;
            }
            ;
            list.appendChild(li);
        });
    }
    catch (error) {
        console.error(error);
    }
}));
//# sourceMappingURL=index.js.map