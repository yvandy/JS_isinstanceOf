const a1x = 20;
{
    const a1x = 100;
    {
        const a1x =200;
        console.log(a1x);
    }
}

/*
    there will be 4 different scopes in this case :
    1. Block : a1x will have 200 
    2. Block : a1x will have 100
    3. Script : a1x will have 20
    4. Global :there will not be any global scope for this.
*/