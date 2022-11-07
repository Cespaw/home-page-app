function About() {
    return (
        <div class="card">
            <div class="card-body">
                This site serves as a good starting page with an inspirational quote and a todo-list.
                The quote is fetched from "https://stoic-quotes.com/api/quote" and features a new randomized quote.
                The todo-list uses LocalStorage to store the items in the list.
            </div>
        </div>
    );
}

export default About;